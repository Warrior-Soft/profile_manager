<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%client}}`.
 */
class m221230_173604_create_client_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%client}}', [
            'id' => $this->primaryKey(),
            'first_name' => $this->string(50),
            'last_name' => $this->string(50),
            'phone' => $this->string(50),
            'email' => $this->string(50),
            'sex' => $this->string(50),
            'birthday' => $this->date(),

        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%client}}');
    }
}
