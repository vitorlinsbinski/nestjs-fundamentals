import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository';
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NestCreateQuestionUseCase extends CreateQuestionUseCase {
  constructor(questionsRepository: QuestionsRepository) {
    super(questionsRepository);
  }
}
