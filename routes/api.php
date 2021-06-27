<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\TransactionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('auth/signout', [AuthController::class, 'signout']);
Route::get('auth/attempt/{mode}', [AuthController::class, 'attempt']);
Route::get('auth/tp/attempt/{mode}', [AuthController::class, 'tpAttempt']);

Route::get('auth/su/attempt/{mode}', [AuthController::class, 'suAttempt']);
Route::get('auth/su/tp/attempt/{mode}', [AuthController::class, 'suTpAttempt']);

Route::get('product/read/{filter}', [AdminController::class, 'prodRead']);
Route::post('product/create', [AdminController::class, 'prodCreate']);
Route::post('product/update', [AdminController::class, 'prodUpdate']);

Route::get('cart', [CartController::class, 'cart']);
Route::get('cart/tocheckout', [CartController::class, 'cartToCheckout']);
Route::get('cart/count', [CartController::class, 'count']);
Route::post('cart/create', [CartController::class, 'create']);
Route::post('cart/checkout', [CartController::class, 'checkout']);
Route::post('cart/qty/update', [CartController::class, 'cartQtyUpdate']);

Route::get('transactions', [TransactionController::class, 'transactions']);
Route::post('transaction/status/update', [TransactionController::class, 'statUpdate']);
