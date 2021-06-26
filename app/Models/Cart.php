<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaction;
use App\Models\TransactionItem;

class Cart extends Model
{
    protected $table = 'tbl_cart';
    public $timestamps = false;

    public function create($request)
    {
        $cart = self::where('product_id', $request['id'])->where('user_id', session('uclient')['id'])->where('active', 1)->where('is_checkout', 0)->get(['id', 'quantity']);

        // return $request;
        if (count($cart) > 0) {
            self::where('id', $cart[0]->id)->update([
                'quantity'=> intval($cart[0]->quantity) + 1,
                'updated_at'=>date('Y-m-d H:i:s'),
            ]);
        } else {
            self::insertGetId([
                'user_id'=>session('uclient')['id'],
                'product_id'=>$request['id'],
                'name'=>$request['name'],
                'description'=>$request['description'],
                'image_link'=>$request['image_link'],
                'amount'=>$request['amount'],
                'quantity'=>1,
                'is_checkout'=>0,
                'active'=>1,
                'created_at'=>date('Y-m-d H:i:s'),
            ]);
        }

        return [
            'msg'=> 'success',
            'count'=> self::count($request['id'])['count']
        ];
    }

    public function checkout($request)
    {
        $carts = self::where('user_id', session('uclient')['id'])->where('active', 1)->where('is_checkout', 0)->get();

        $transaction = Transaction::insertGetId([
            'user_id'=>session('uclient')['id'],
            'paid_amount'=>$request['paid_amount'],
            'status'=>'for_delivery',
            'reference_number'=>$request['reference_number'],
            'created_at'=>date('Y-m-d H:i:s'),
        ]);

        for ($i=0; $i < count($carts); $i++) { 
            TransactionItem::insertGetId([
                'transaction_id'=>$transaction,
                'cart_id'=>$carts[$i]->id,
                'created_at'=>date('Y-m-d H:i:s'),
            ]);

            self::where('id', $carts[$i]->id)->update([
                'is_checkout'=>1,
                'updated_at'=>date('Y-m-d H:i:s'),
            ]);
        }

        return [
            'msg'=>'success'
        ];
    }


    public function cart()
    {
        $cart = self::where('user_id', session('uclient')['id'])->where('active', 1)->where('is_checkout', 0)->get();

        return [
            'cart'=> $cart
        ];
    }

    public function count()
    {
        $cart = self::where('user_id', session('uclient')['id'])->where('active', 1)->where('is_checkout', 0)->get(['id', 'quantity']);
        $count = 0;

        for ($i=0; $i < count($cart); $i++) { 
            $count += intval($cart[$i]->quantity);
        }

        return [
            'count'=> $count
        ];
    }
}
