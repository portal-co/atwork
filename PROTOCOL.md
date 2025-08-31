# AtWork v0.1

This protocol allows work providers to, with a website's consent, assert that the user of said website is somehow bound to be Safe For Work and provide actionable guidance to enforce that.

## Announcements

Each work provider creates a non-`enumerable`, non-`configurable`, non-`writable` property on `globalThis` with a hard-to-guess name. It then signs said name, encoded in utf-8, with a private `slh-dsa-shake-256s` key--it does not have to do that every time--and adds it as an `Uint8Array` to the list `globalThis.atwork`. If said list does not alrady exist, the work provider creates it.

Websites have a list of work providers they trust; proxies can filter said list by filtering `globalThis.atwork`. When a website trusts a work provider, it embeds its public key and verifies it against `globalThis.atwork`. If any entries match, the website obtains the payload, decodes it as utf-8, and uses it as a key on `globalThis` to get the runtime API.

