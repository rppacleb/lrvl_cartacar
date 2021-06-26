<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Session;

class Transaction extends Model
{
    protected $table = 'tbl_transaction';
    public $timestamps = false;

    public function transactions()
    {
        if (Session::has('aclient')) {
            return self::orderBy('id', 'DESC')->get();
        } else {
            return self::where('user_id', session('uclient')['id'])->orderBy('id', 'DESC')->get();

        }
    }

    public function statUpdate($request)
    {
        self::where('id', $request['id'])->update([
            'status'=>$request['status'],
            'updated_at'=>date('Y-m-d H:i:s')
        ]);

        return [
            'msg'=>'success'
        ];
    }
}
