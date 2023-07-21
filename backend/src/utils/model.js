import { writeFileSync } from 'fs';
import { resolve } from 'path';

export const writeData = (filename, data) => {
	writeFileSync(resolve('src', 'public', 'uploads', filename), data);
	return true;
};
