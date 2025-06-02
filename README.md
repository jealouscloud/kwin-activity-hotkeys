# activity-hotkeys

This is a KWIN script that adds activity manager hotkeys that are commonly found
in i3/awesomewm workspaces.

KDE defaults to using Meta+1, Meta+2 etc for task manager although this is the
recommended binding to use for 'Switch to Activity', making it function like a
workspace.

Personally, I put a number at the start of my activity name `(1)`, `(2)` to
ensure ordering as they are sorted alphabetically by KDE

There are also hotkeys to add/remove windows from an activity

- `Activate Activity 1-9` - Select current activity. Recommended binding: Meta+1 - Meta+9
- `Move Window to Activity 1-9` - Migrate a window to the numbered activity. Recommended binding: Meta+Shift+1 - Meta+Shift+9. KDE calls this 'Meta+!' etc.

I found KDE to be _just nearly_ good enough to migrate to from an overly
custom config.
This plugin gets me over the hill.
I hope it helps you too.

## Building

`zip activity-hotkeys.kwinscript LICENSE metadata.json contents/code/main.js`

## Installing

Add the .kwinscript via "Install from file" in the Kwin scripts settings menu.

You may also find it in the KDE store.
