        _vsrkpd.d = null;

if( _vsrkpd.d ) {
        _vsrkpd.write_numdata('rkpd_CtjSaFNw9R4H_gCb', _vsrkpd.d, 3600);
    _vsrkpd.rewrite_document();
} else {
    _vsrkpd._ds.parseDomForNumbers();
    _vsrkpd.getnum_error( 'rewrite not found' );
}

