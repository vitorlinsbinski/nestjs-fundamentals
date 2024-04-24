import { hash, compare } from 'bcryptjs';

import { HashComparer } from '@/domain/forum/application/cryptography/hash-comparer';
import { HasherGenerator } from '@/domain/forum/application/cryptography/hash-generator';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BcryptHasher implements HasherGenerator, HashComparer {
  private HASH_SALT_LENGTH = 8;

  compare(plain: string, hash: string): Promise<boolean> {
    return compare(plain, hash);
  }

  hash(plain: string): Promise<string> {
    return hash(plain, this.HASH_SALT_LENGTH);
  }
}
