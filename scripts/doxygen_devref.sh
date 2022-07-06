#!/usr/bin/env bash

set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
SCRIPT_INPUTS="$SCRIPT_DIR/doxygen_devref.inputs"
REPOSITORY_DIR="$SCRIPT_DIR/.."
ECSACT_REPO=""

[ -f "$SCRIPT_INPUTS" ] && source $SCRIPT_INPUTS

read -e -p "Ecsact repository directory: " -i "$ECSACT_REPO" ECSACT_REPO

[ -z "$ECSACT_REPO" ] && echo "Aborting..." && exit 1

echo "ECSACT_REPO=$ECSACT_REPO" > $SCRIPT_INPUTS

# expand ~ if it has it
ECSACT_REPO="${ECSACT_REPO/#\~/$HOME}"

[ ! -d "$ECSACT_REPO" ] && echo "[ERROR] $ECSACT_REPO is not a directory." && exit 1

[ ! -f "$ECSACT_REPO/Doxyfile" ] && echo "[ERROR] $ECSACT_REPO/Doxyfile is missing. Please double check that the repository directory you've inputed is a clone of the ecsact repository and you're on the correct branch." && exit 1

$ECSACT_REPO/scripts/doxygen.sh

ECSACT_DEVREF_PATH="$REPOSITORY_DIR/src/assets/_devref/ecsact"

[ -d "$ECSACT_DEVREF_PATH" ] && rm -rd $ECSACT_DEVREF_PATH
mkdir -p $ECSACT_DEVREF_PATH
cp -r $ECSACT_REPO/.doxygen/xml/* $ECSACT_DEVREF_PATH
