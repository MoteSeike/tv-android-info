import { Test, TestingModule } from '@nestjs/testing';
import { UsertaskController } from './usertask.controller';

describe('UsertaskController', () => {
  let controller: UsertaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsertaskController],
    }).compile();

    controller = module.get<UsertaskController>(UsertaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
