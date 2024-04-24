import { Module } from '@nestjs/common';
import { BcryptHasher } from './bcrypt-hasher';
import { JwtEncrypter } from './jwt-encrypter';
import { Encrypter } from '@/domain/forum/application/cryptography/encrypter';
import { HashComparer } from '@/domain/forum/application/cryptography/hash-comparer';
import { HasherGenerator } from '@/domain/forum/application/cryptography/hash-generator';

@Module({
  providers: [
    { provide: Encrypter, useClass: JwtEncrypter },
    { provide: HashComparer, useClass: BcryptHasher },
    { provide: HasherGenerator, useClass: BcryptHasher },
  ],
  exports: [Encrypter, HashComparer, HasherGenerator],
})
export class CryptographyModule {}
