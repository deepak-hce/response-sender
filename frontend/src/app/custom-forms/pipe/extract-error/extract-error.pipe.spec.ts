import { ExtractErrorPipe } from './extract-error.pipe';

describe('ExtractErrorPipe', () => {
    it('create an instance', () => {
        const pipe = new ExtractErrorPipe();
        expect(pipe).toBeTruthy();
    });
});
