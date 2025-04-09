---
title: "Home"
summary: "About this page."
date: 2016-04-13
layout: default
---

Notes, research and writing primarily on blockchain, cryptography, p2p networks and some math. Some snippets of Rust and notes on technology in general.

<div class="contact-info">
    <p>You can reach me by email at: elijahhamptonj@proton.me.</p>
    <ul class="nav">
        {% for item in site.menu_external %}
            <li><a href="{{ item.url }}" target="_blank">{{ item.title }}</a></li>
        {% endfor %}
    </ul>
</div>

<br />

<!-- In your HTML file -->
<div class="crypto-addresses">
    <div class="row">
        <div class="col-md-6">
            <h4>Zcash Unified Address</h4>
            <div class="address-container">
                <code id="zcash-address" class="truncated-address">u1l4hfr96k0x8pkph4l8ez...f8z0tjfnpghj6ns8k5zvr95v2mj4phnze2eg4t</code>
                <button id="copy-button" class="copy-btn" onclick="copyAddress()">
                    Copy
                </button>
                <span id="copy-notification" class="copy-notification">Copied!</span>
                <div id="full-address-tooltip" class="full-address-tooltip">
                    u1l4hfr96k0x8pkph4l8ezdrd67ap03mlg6hax47jgyjk6mqjqt4edfg2pns7ff5d3n6efpvfjncl2xk4g3makl7hnwgp405q282kprn5wklqmqeykdtw45mdk7t2jhzwn8tsk68dzs0a7an60ee0n0k7c34fzn6ecv2nwmntr8e6q7f8z0tjfnpghj6ns8k5zvr95v2mj4phnze2eg4t
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.address-container {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.truncated-address {
    background-color: #f5f5f5;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #ddd;
    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.copy-btn {
    margin-left: 10px;
    padding: 6px 12px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.copy-btn:hover {
    background-color: #e0e0e0;
}

.copy-notification {
    margin-left: 10px;
    color: green;
    display: none;
}

.full-address-tooltip {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 4px;
    z-index: 100;
    margin-top: 5px;
    max-width: 500px;
    word-wrap: break-word;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.truncated-address:hover + .full-address-tooltip,
.full-address-tooltip:hover {
    display: block;
}
</style>

<script>
function copyAddress() {
    // Get the full address
    const fullAddress = document.getElementById('full-address-tooltip').textContent.trim();
    
    // Copy to clipboard
    navigator.clipboard.writeText(fullAddress).then(function() {
        // Show the notification
        const notification = document.getElementById('copy-notification');
        notification.style.display = 'inline';
        
        // Hide after 2 seconds
        setTimeout(function() {
            notification.style.display = 'none';
        }, 2000);
    });
}

// You can also add this to show the full address on click
document.getElementById('zcash-address').addEventListener('click', function() {
    const tooltip = document.getElementById('full-address-tooltip');
    if (tooltip.style.display === 'block') {
        tooltip.style.display = 'none';
    } else {
        tooltip.style.display = 'block';
    }
});
</script>