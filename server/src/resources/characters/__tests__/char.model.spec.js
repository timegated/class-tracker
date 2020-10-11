import { Char } from '../char.model';
import mongoose from 'mongoose';

describe('Char model', () => {
  describe('schema', () => {
    test('name', () => {
      const name = Char.schema.obj.name
      expect(name).toEqual({
        type: String,
        required: true,
        trim: true,
        maxLength: 50
      })
    })
  })
})