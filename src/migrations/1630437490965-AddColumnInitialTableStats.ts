import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumnInitialTableStats1630437490965 implements MigrationInterface {
    name = 'AddColumnInitialTableStats1630437490965'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."states" ADD "initial" character varying(2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."states" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."states" ADD "name" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."states" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."states" ADD "name" character varying(2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."states" DROP COLUMN "initial"`);
    }

}
