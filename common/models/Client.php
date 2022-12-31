<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%client}}".
 *
 * @property int $id
 * @property string|null $first_name
 * @property string|null $last_name
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $sex
 * @property string|null $birthday
 *
 * @property Address[] $addresses
 * @property Perfil[] $perfils
 */
class Client extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%client}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['birthday'], 'safe'],
            [['first_name', 'last_name', 'phone', 'email', 'sex'], 'string', 'max' => 50],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'first_name' => 'First Name',
            'last_name' => 'Last Name',
            'phone' => 'Phone',
            'email' => 'Email',
            'sex' => 'Sex',
            'birthday' => 'Birthday',
        ];
    }

    /**
     * Gets query for [[Addresses]].
     *
     * @return \yii\db\ActiveQuery|\common\models\query\AddressQuery
     */
    public function getAddresses()
    {
        return $this->hasMany(Address::class, ['client_id' => 'id']);
    }

    /**
     * Gets query for [[Perfils]].
     *
     * @return \yii\db\ActiveQuery|\common\models\query\PerfilQuery
     */
    public function getPerfils()
    {
        return $this->hasMany(Perfil::class, ['client_id' => 'id']);
    }

    /**
     * {@inheritdoc}
     * @return \common\models\query\ClientQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new \common\models\query\ClientQuery(get_called_class());
    }
}
