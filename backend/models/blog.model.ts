import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('blogs')
export class Blogs {
    @PrimaryGeneratedColumn('increment', {name: 'id'})
    readonly id?: number;

    @Column('varchar', {length: 255, name: 'firstname', nullable: false})
    readonly post: string;

    @Column('varchar', {length: 255, name: 'lastname', nullable: false})
    readonly user_id: string;

    @Column('varchar', {length: 255, name: 'email', nullable: false})
    readonly status: string;
}