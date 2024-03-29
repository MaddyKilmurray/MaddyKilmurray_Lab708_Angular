export class Employee {
    public get imgUrl(): string {
        return this._imgUrl;
    }
    public set imgUrl(value: string) {
        this._imgUrl = value;
    }
    public get manager(): boolean {
        return this._manager;
    }
    public set manager(value: boolean) {
        this._manager = value;
    }
    public get position(): string {
        return this._position;
    }
    public set position(value: string) {
        this._position = value;
    }
    public get officeNumber(): number {
        return this._officeNumber;
    }
    public set officeNumber(value: number) {
        this._officeNumber = value;
    }
    public get phoneNumber(): string {
        return this._phoneNumber;
    }
    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    constructor(
        private _id: number,
        private _name: string,
        private _phoneNumber: string,
        private _officeNumber: number,
        private _position: string,
        private _manager: boolean,
        private _imgUrl: string
    ){}
}