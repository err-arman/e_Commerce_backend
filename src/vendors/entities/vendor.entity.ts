import { UserAccount } from 'src/user-accounts/entities/user-account.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('vendor')
export class Vendor {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Column()
  name: string;

  @Column()
  address: string;

  @CreateDateColumn({ type: 'date' })
  date_of_birth: string;

  @Column()
  gender: string;

  @Column()
  phone: string;

  @Column()
  forgot_pass_id: string;

  @OneToOne(() => UserAccount, (userAccount) => userAccount.vendor)
  @JoinColumn({name: 'vendor_id'})
  user_account: UserAccount;
}
