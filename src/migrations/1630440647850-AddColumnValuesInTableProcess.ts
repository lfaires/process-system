import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumnValuesInTableProcess1630440647850 implements MigrationInterface {
    name = 'AddColumnValuesInTableProcess1630440647850'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."process" ADD "value" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."process" DROP COLUMN "value"`);
    }

}
