import { Options } from 'webext-options-sync';
import optionsStorage from './optionsStorage'
export class SettingBase implements Options {
    constructor() { }
    [key: string]: string | number | boolean;
    githubToken: string = '';
    gistID: string = '';
    gistFileName: string = 'BookmarkHub';
    enableNotify: boolean = true;
    githubURL: string = 'https://api.github.com';
    enableAutoSync: boolean = false;
}
export class Setting extends SettingBase {
    private constructor() { super() }
    static async build() {
        let options = await optionsStorage.getAll();
        console.log("Loading settings:", options);
        let setting = new Setting();
        setting.gistID = options.gistID;
        setting.gistFileName = options.gistFileName;
        setting.githubToken = options.githubToken;
        setting.enableNotify = options.enableNotify;
        setting.enableAutoSync = options.enableAutoSync;
        return setting;
    }
}
