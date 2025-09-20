- name: Write backend IPs into config.js
  run: |
    mkdir -p frontend/src
    cat > frontend/src/config.js <<'EOF'
export const PRODUCT_API_BASE = "http://4.237.211.110";
export const ORDER_API_BASE   = "http://4.254.28.11";
EOF
    echo "==== config.js ===="
    cat frontend/src/config.js
