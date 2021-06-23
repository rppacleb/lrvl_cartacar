<?php

namespace App\Models;

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

    public function tpAttempt($request, $mode)
    {
        $user = User::where($mode, $request['account'])->get();

        if (count($user) > 0) {
            return route('session', $user[0]);

            return [
                'msg'=> 'user',
                'status'=> 200
            ];
        } else {
            $newUser = User::insertGetId([
                'email'=> $request['account'],
                'password'=> 'Cartacar-123',
                'user_type'=> 'user',
                'created_at'=> date('Y-m-d H:i:s')
            ]);

            $user = User::where('id', $newUser)->get();
            Auth::login($user[0]);
            
            return [
                'msg'=> 'user',
                'status'=> 200
            ];
        }
    }
}