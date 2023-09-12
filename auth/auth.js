function authenticateToken(req, res, next) {
    const authHeader = req.header('Authorization');

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
    
      const token = authHeader.split(' ')[1];
  
    
      try {
        req.user = { token };
   
        next();
      } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
      }
  }

 module.exports = { authenticateToken };