import { Test, TestingModule } from '@nestjs/testing';
import { UsertaskService } from './usertask.service';

describe('UsertaskService', () => {
  let service: UsertaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsertaskService],
    }).compile();

    service = module.get<UsertaskService>(UsertaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
