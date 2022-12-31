<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%perfil}}`.
 */
class m221231_131034_create_perfil_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%perfil}}', [
            'id' => $this->primaryKey(),
            'client_id' => $this->integer(),
            'perfil_name' => $this->string(155),
            'password' => $this->string(155),
        ]);

        $this->addForeignKey(
            'fk-perfil-client_id',
            'perfil',
            'client_id',
            'client',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%perfil}}');
    }
}
