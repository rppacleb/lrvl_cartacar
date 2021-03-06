<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Authenticate;

class AuthController extends Controller
{
    private $instance;

    public function __construct()
    {
        $this->instance = new Authenticate();
    }

    public function attempt(Request $request, $mode)
    {
        return $this->instance->attempt($request, $mode);
    }

    public function tpAttempt(Request $request, $mode)
    {
        return $this->instance->tpAttempt($request, $mode);
    }

    public function suAttempt(Request $request, $mode)
    {
        return $this->instance->suAttempt($request, $mode);
    }

    public function suTpAttempt(Request $request, $mode)
    {
        return $this->instance->suTpAttempt($request, $mode);
    }

    public function signout()
    {
        session()->flush();

        return [
            'msg'=> 'success'
        ];
    }
}
