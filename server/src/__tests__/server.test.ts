
import {connectDb} from '../server'
import db from '../config/db'


    jest.mock('../config/db.ts')
    describe('connecdtDb', () => {
        it('should handle database connection error', async () => {
            jest.spyOn(db, 'authenticate')
            .mockRejectedValueOnce(new Error('Error en DB'))
        const consoleSpy = jest.spyOn(console, 'log')

        await connectDb()

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('Error en DB')
        )
        })
    })

