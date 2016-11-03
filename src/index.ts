import { NextFunction, Request, Response } from 'express';

export = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const redirectUrl = req.url
      .replace(/(\/+)/g, '/')           // collapse repeated slashes
      .replace(/\/((?:\?.*)?)$/, '$1')  // remove trailing slash while preserving querystring
      .replace(/^([^/]|$)/, '/$1');     // ensure url starts with a slash
    if (req.url !== redirectUrl && req.url !== '/') {
      res.redirect(redirectUrl);
      return;
    }
    next();
  };
};
