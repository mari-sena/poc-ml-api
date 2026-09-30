import 'dotenv/config';
import { z } from 'zod';

const bool = z
    .string()
    .optional()
    .transform((v) => v === undefined || v === '' ? undefined : ['1', 'true', 'yes'].includes(v.toLowerCase()));

