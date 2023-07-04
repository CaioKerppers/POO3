
export default class Token{
    private _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InRva2VuX3BhZ2FtZW50byJ9.jkK_X_KA_GpPafK9Vdo8A8J4KNshzlwk2-OhIJ7zYas";
    
    public get token() {
        return this._token;
    }
    public set token(value) {
        this._token = value;
    }

    
}