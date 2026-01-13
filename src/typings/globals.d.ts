import { App } from "obsidian";

declare global {
    var app: App;
    var MDM_DEBUG: boolean | undefined;
}