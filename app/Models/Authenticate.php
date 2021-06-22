<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Auth;
use App\Models\User;

class Authenticate {

    public function attempt($request, $mode)
    {
        $user = User::where($mode, $request['account'])->where('password', $request['password'])->get();

        if (count($user) > 0) {
            Auth::login($user[0]);

            return [
                'msg'=> 'user',
                'status'=> 200
            ];
        } else {
            return [
                'msg'=> '!user',
                'status'=> 200
            ];
        }
    }
}