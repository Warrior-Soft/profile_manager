<?php

namespace frontend\controllers;
use frontend\resources\PerfilFields;
use Yii;

class PerfilController extends \yii\rest\ActiveController {

    public $modelClass = PerfilFields::class;

    public function actionGetall()
    {
        $perfiles = PerfilFields::find()->all();
        return $this->asJson($perfiles);
    }

    public function actionGetbyid($id)
    {
        $perfil = PerfilFields::find()->where(['id' => $id])->one();
        //$client = ClientFields::find($id);
        return $this->asJson($perfil);
    }

    public function actionGetbyclient($id)
    {
        $perfil = PerfilFields::find()->where(['client_id' => $id])->one();
        //$client = ClientFields::find($id);
        return $this->asJson($perfil);
    }

    public function actionPost()
    {
        $request = Yii::$app->request->post();

        $perfil=new PerfilFields();
        $perfil->client_id=$request['client_id'];
        $perfil->perfil_name=$request['perfil_name'];
        $perfil->password=$request['password'];
        $perfil->save();

        return $this->asJson($perfil);
    }

    public function actionPut($id)
    {
        $request = Yii::$app->request->post();

        $perfil = PerfilFields::find()->where(['id' => $id])->one();
        $perfil->perfil_name=$request['perfil_name'];
        $perfil->password=$request['password'];
        $perfil->save();

        return $this->asJson($perfil);
    }

    public function actionDelete($id)
    {
        $perfil = PerfilFields::find()->where(['id' => $id])->one();
        $perfil->delete();

        return $this->asJson($perfil);
    }

}
