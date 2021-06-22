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
}
