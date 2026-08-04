// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0-or-later
// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2026 Urutau-Ltd <softwarelibre@urutau-ltd.org>

(() => {
    if (!("serviceWorker" in navigator)) {
        return;
    }

    globalThis.addEventListener("load", async () => {
        try {
            const registration = await navigator.serviceWorker.register(
                "/sw.js",
                {
                    type: "module",
                    scope: "/",
                    updateViaCache: "none",
                },
            );
            await registration.update();
        } catch (error) {
            console.error("SW: Failed to register service worker.", error);
        }
    });
})();
// @license-end
