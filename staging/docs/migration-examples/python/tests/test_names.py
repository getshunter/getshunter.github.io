from sample.names import normalize_name


def test_normalize_name_collapses_spaces():
    assert normalize_name("  ada   lovelace ") == "Ada Lovelace"
