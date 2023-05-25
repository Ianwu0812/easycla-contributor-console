// Copyright The Linux Foundation and each contributor to CommunityBridge.
// SPDX-License-Identifier: MIT

export const environment = {
  production: true,
  auth0RedirectUrl: `${window.location.origin}/#/auth`,
  auth0Audience: 'https://api-gw.platform.linuxfoundation.org/',
  lfxHeader: 'https://cdn.dev.platform.linuxfoundation.org',
  ACCEPTABLE_USER_POLICY:
    'https://communitybridge.staging.platform.linuxfoundation.org/acceptable-use/',
  SERVICE_SPECIFIC_TERM:
    'https://communitybridge.staging.platform.linuxfoundation.org/service-terms/',
  PLATFORM_USER_AGREEMENT:
    'https://communitybridge.staging.platform.linuxfoundation.org/platform-use-agreement/',
};
