import { Request, Response } from "express";

import TimetableModel from "../models/models";

import { TimetableInterface } from "../models/schemas";

export const getSubjects = (req: Request, res: Response) => {
    TimetableModel.find({}, (err: Error, subj: Array<TimetableInterface>) => {
        if (err) {
            res.status(200).send(err);
        } else {
            res.status(200).send(subj);
        }
    })
}

export const getSubject = (req: Request, res: Response) => {
    TimetableModel.findById({_id: req.params.id}, (err: Error, subj: TimetableInterface) => {
        if (err) {
            res.status(200).send(err);
        } else {
            res.status(200).send(subj);
        }
    })
}

export const addSubjects = (req: Request, res: Response) => {
    TimetableModel.insertMany(req.body)
    .then(() => res.status(200).send({message: "The subjects have been successfully added!"}))
    .catch(err => res.status(200).send(err));
}

export const updateSubjects = (req: Request, res: Response) => {
    TimetableModel.updateMany(req.body)
    .then(() => res.status(200).send({message: "The subjects have been successfully updated!"}))
    .catch(err => res.status(200).send(err));
}

export const deleteSubjects = (req: Request, res: Response) => {
    TimetableModel.deleteMany(req.body)
    .then(() => res.status(200).send({message: "The subjects have been successfully deleted!"}))
    .catch(err => res.status(200).send(err));
}