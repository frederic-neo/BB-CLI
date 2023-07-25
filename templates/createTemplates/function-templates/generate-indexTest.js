const generateIndexTest = () => `
// Import the handler function
import handler from '../index'

// Mock the 'http' module to create a mock 'ServerResponse' instance
jest.mock('http', () => ({
  ServerResponse: jest.fn(() => ({
    write: jest.fn(),
    end: jest.fn(),
  })),
}))

describe('handler function', () => {
  // Test case 1: Health check
  it('should respond with health check success message', async () => {
    const event = {
      req: {
        params: {
          health: 'health',
        },
      },
      res: new (require('http').ServerResponse)(),
    }

    await handler(event)

    expect(event.res.write).toHaveBeenCalledWith(JSON.stringify({ success: true, msg: 'Health check success' }))
    expect(event.res.end).toHaveBeenCalled()
  })

  // Test case 2: Default response
  it('should respond with default success message', async () => {
    const event = {
      res: new (require('http').ServerResponse)(),
    }

    await handler(event)

    expect(event.res.write).toHaveBeenCalledWith(JSON.stringify({ success: true, msg: 'Happy Hacking' }))
    expect(event.res.end).toHaveBeenCalled()
  })
})
`
module.exports = { generateFunctionIndexTest: generateIndexTest }
