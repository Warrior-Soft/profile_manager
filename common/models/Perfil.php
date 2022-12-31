<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%perfil}}".
 *
 * @property int $id
 * @property int|null $client_id
 * @property string|null $perfil_name
 * @property string|null $password
 *
 * @property Client $client
 */
class Perfil extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%perfil}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['perfil_name', 'password','client_id'], 'required'],
            [['client_id'], 'integer'],
            [['perfil_name', 'password'], 'string', 'max' => 155],
            [['client_id'], 'exist', 'skipOnError' => true, 'targetClass' => Client::class, 'targetAttribute' => ['client_id' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'client_id' => 'Client ID',
            'perfil_name' => 'Perfil Name',
            'password' => 'Password',
        ];
    }

    /**
     * Gets query for [[Client]].
     *
     * @return \yii\db\ActiveQuery|\common\models\query\ClientQuery
     */
    public function getClient()
    {
        return $this->hasOne(Client::class, ['id' => 'client_id']);
    }

    /**
     * {@inheritdoc}
     * @return \common\models\query\PerfilQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new \common\models\query\PerfilQuery(get_called_class());
    }
}
