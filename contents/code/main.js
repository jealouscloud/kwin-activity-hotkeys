
function with_activity_list(fn) {
    // Helper function to retrieve the list of activities
    // Result is sent to callback fn
    // May 30 18:01:45 leapfrog kwin_wayland[67274]: js: DBus result: [["089df242-eb88-4138-860f-ad49734ef569","(1) Default","","freemind",2],["4856e3ef-5418-4119-82f9-cafee95afb05","(2) Develop","","com.visualstudio.code.oss",2],["341bb3fb-c925-44ca-a426-5438781c0417","(3) Task","","utilities-terminal",2],["0f9170e2-bba3-4c9d-a6bc-ddaaa098704a","(4) Background","","activities",2]]
    callDBus(
        "org.kde.ActivityManager",
        "/ActivityManager/Activities",
        "org.kde.ActivityManager.Activities",
        "ListActivitiesWithInformation",
        fn,
    )
}

function move_activity(activity_index) {
    if (activity_index >= workspace.activities.length) {
        return
    }
    workspace.activeWindow.activities = [workspace.activities[activity_index]]
}

function toggle_activity(activity_index) {
    if (activity_index >= workspace.activities.length) {
        return
    }
    let activity = workspace.activities[activity_index];
    let in_activity = workspace.activeWindow.activities.includes(activity);
    if (!in_activity) {
        workspace.activeWindow.activities.push(activity);
    } else {
        if (workspace.activeWindow.activities.length === 1 ) {
            // don't filter out if it's only on this activity
            return;
        }
        workspace.activeWindow.activities = workspace.activeWindow.activities.filter(a => a !== activity);
    }
}


function activate_activity(activity_index) {
    if (activity_index >= workspace.activities.length) {
        return
    }
    workspace.currentActivity = workspace.activities[activity_index];
}

function main() {
    for (let i = 1; i < 10; i++) {
        registerShortcut(`windowMigrateActivity${i}`, `Move Window to Activity ${i}`, ``, () => move_activity(i - 1))
    }

    for (let i = 1; i < 10; i++) {
        registerShortcut(`activateActivity${i}`, `Activate Activity ${i}`, ``, () => activate_activity(i - 1))
    }
    for (let i = 1; i < 10; i++) {
        registerShortcut(`windowToggleActivity${i}`, `Toggle Window in Activity ${i}`, ``, () => toggle_activity(i - 1))
    }
}

main();

