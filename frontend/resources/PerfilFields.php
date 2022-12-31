<?php
namespace frontend\resources;
use \common\models\Perfil;

class PerfilFields extends Perfil
{
  public function fields(){
    return ['id',
    'client_id',
    'perfil_name' ,
    'password'];
  }
}
