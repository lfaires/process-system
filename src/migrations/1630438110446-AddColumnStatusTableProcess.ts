import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumnStatusTableProcess1630438110446 implements MigrationInterface {
    name = 'AddColumnStatusTableProcess1630438110446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."process" ADD "status" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."process" DROP COLUMN "status"`);
    }

}
