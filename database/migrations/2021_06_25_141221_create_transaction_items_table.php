<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('tbl_transaction_item');
        Schema::create('tbl_transaction_item', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('transaction_id')->index();
            $table->integer('cart_id')->index();
            $table->dateTimeTz('created_at',6);
            $table->dateTimeTz('updated_at',6)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transaction_items');
    }
}
