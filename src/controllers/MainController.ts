import { NextFunction, Request, Response } from 'express';
import { Movie } from '../models/Movie';
import { User } from '../models/User';
import { Actor } from '../models/Actor';
import { actors } from '../routes/actors';

// const Contact = mongoose.model('Contact', ContactSchema);

export class MainController {
  public async addNewContact(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await User.scope(req.query['scope']).findAll({
        where: { id: 24 },
        include: [{all:true}],
    }));
    } catch (e) {
      next(e);
    }
    /*    let newContact = new Contact(req.body);
    
        newContact.save((err, contact) => {
            if(err){
                res.send(err);
            }    
            res.json(contact);
        });*/
  }

  public async addNewUser(req: Request, res: Response, next: NextFunction) {
    try {
      const actor = await User.create(req.body);
      res.status(201).json(actor);
    } catch (e) {
      next(e);
    }
  }

  /*  public getContacts (req: Request, res: Response) {
        Contact.find({}, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public getContactWithID (req: Request, res: Response) {           
        Contact.findById(req.params.contactId, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public updateContact (req: Request, res: Response) {           
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public deleteContact (req: Request, res: Response) {           
        Contact.remove({ _id: req.params.contactId }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        });
    }*/
}
