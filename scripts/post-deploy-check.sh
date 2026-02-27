#!/usr/bin/env bash

set -euo pipefail

DOMAIN="${1:-kernels.lv}"
BASE="https://${DOMAIN}"

check_status() {
  local path="$1"
  local expected="$2"
  local url="${BASE}${path}"
  local code
  code=$(curl -s -o /dev/null -w "%{http_code}" "$url")

  if [[ "$code" == "$expected" ]]; then
    echo "OK   ${url} -> ${code}"
  else
    echo "FAIL ${url} -> ${code} (expected ${expected})"
    return 1
  fi
}

check_redirect() {
  local path="$1"
  local expected_code="$2"
  local expected_location="$3"
  local url="${BASE}${path}"
  local response
  local code
  local location

  response=$(curl -s -I "$url")
  code=$(printf "%s" "$response" | awk 'toupper($1) ~ /^HTTP/ {print $2; exit}')
  location=$(printf "%s" "$response" | awk 'toupper($1) == "LOCATION:" {print $2; exit}' | tr -d '\r')

  if [[ "$code" == "$expected_code" && "$location" == "$expected_location" ]]; then
    echo "OK   ${url} -> ${code} ${location}"
  else
    echo "FAIL ${url} -> ${code} ${location} (expected ${expected_code} ${expected_location})"
    return 1
  fi
}

echo "Checking deployment at ${BASE}"
echo

check_status "/" "200"
check_status "/en" "200"
check_status "/robots.txt" "200"
check_status "/sitemap.xml" "200"

check_redirect "/lv" "308" "${BASE}/"
check_redirect "/lv/test" "308" "${BASE}/test"

echo
echo "All checks passed."
