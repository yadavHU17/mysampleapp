#!/bin/bash
cd ${APPCENTER_SOURCE_DIRECTORY}
echo APPCENTER_KEY_ALIAS=${APPCENTER_KEY_ALIAS}” > .env
echo APPCENTER_KEYSTORE_PASSWORD=${APPCENTER_KEYSTORE_PASSWORD}” >> .env
echo APPCENTER_KEY_PASSWORD=${APPCENTER_KEY_PASSWORD}” >> .env
echo “FAQ_URL=${FAQ_URL}” >> .env
echo REACT_APP_DATA=${REACT_APP_DATA}” >> .env
