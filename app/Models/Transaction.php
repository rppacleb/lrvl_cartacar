<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Session;
use DB;

class Transaction extends Model
{
    protected $table = 'tbl_transaction';
    public $timestamps = false;

    public function transactions()
    {
        if (Session::has('aclient')) {
            return DB::table('tbl_transaction as t')
                ->leftJoin('tbl_user as u', 'u.id', 't.user_id')
                ->orderBy('t.id', 'DESC')
                ->select('t.id as tid', 't.fullname', 't.address', 't.paid_amount', 't.status', 'u.mobile', 'u.email')
                ->get();
        } else {
            return DB::table('tbl_transaction as t')
                ->leftJoin('tbl_user as u', 'u.id', 't.user_id')
                ->where('u.id', session('uclient')['id'])
                ->orderBy('t.id', 'DESC')
                ->select('t.id as tid', 't.fullname', 't.address', 't.paid_amount', 't.status', 'u.mobile', 'u.email')
                ->get();

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
