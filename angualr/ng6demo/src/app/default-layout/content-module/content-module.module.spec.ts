import { ContentModuleModule } from './content-module.module';

describe('ContentModuleModule', () => {
  let contentModuleModule: ContentModuleModule;

  beforeEach(() => {
    contentModuleModule = new ContentModuleModule();
  });

  it('should create an instance', () => {
    expect(contentModuleModule).toBeTruthy();
  });
});
