<?php
namespace frontend\resources;
use \common\models\Client;

class ClientFields extends Client
{
  public function fields(){
    return ['id',
    'first_name',
    'last_name' ,
    'phone',
    'email',
    'sex' ,
    'birthday'];
  }
}
