# {{ ansible_managed }}

# see "man logrotate" for details
{% for option in logrotate_options %}
{{ option }}
{% endfor %}

# packages drop log rotation information into this directory
include {{ logrotate_include_dir }}

# no packages own wtmp, or btmp -- we'll rotate them here
{{ logrotate_wtmp.logs | join(" ") }} {
{% for option in logrotate_wtmp.options %}
    {{ option }}
{% endfor %}
}

{{ logrotate_btmp.logs | join(" ") }} {
{% for option in logrotate_btmp.options %}
    {{ option }}
{% endfor %}
}